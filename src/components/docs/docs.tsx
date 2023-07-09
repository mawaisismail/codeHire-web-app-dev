import { UserAvatar } from "@/components/common/UserAvatar";
import { GHeader } from "@/components/common/GHeader";
import { useEffect, useState } from "react";
import { Documents } from "@/components/user/userProfilePage/profile/documents/documents";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  DELETE_DOC,
  GET_DOCS,
  UPLOAD_DOCS,
} from "../../../constants/graphQL/docs";
import { uploadFile } from "../../../utils/file-upload-service";
import { IDocs } from "../../../constants/interfaces/docs";

export const Docs = () => {
  const [getDocs, setDocs] = useLazyQuery(GET_DOCS, {
    fetchPolicy: "network-only",
  });
  const [loading, setLoading] = useState(false);
  const [docs, setDocsData] = useState<IDocs[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadDoc, { data }] = useMutation(UPLOAD_DOCS, {
    fetchPolicy: "network-only",
  });
  const [deleteUpload] = useMutation(DELETE_DOC, {
    fetchPolicy: "network-only",
  });

  const deleteDoc = async (uid: string) => {
    await deleteUpload({
      variables: {
        uid,
      },
    });
    getDocs();
  };

  useEffect(() => {
    if (data) {
      setLoading(false);
      getDocs();
    }
  }, [data]);

  useEffect(() => {
    getDocs();
  }, [getDocs]);

  useEffect(() => {
    if (setDocs?.data?.getDocs) {
      setDocsData(setDocs?.data.getDocs);
    }
  }, [setDocs?.data]);

  const uploadFileToS3 = async () => {
    setLoading(true);
    let file = null;
    if (selectedFile) {
      file = await uploadFile(selectedFile);
      uploadDoc({
        variables: {
          url: file,
          name: selectedFile.name ?? "",
        },
      });
      setSelectedFile(null);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-6 mt-[70px]">
      <div>
        <GHeader
          title={"Manage your's Documents Here"}
          subtitle={"You can Upload,Delete.Manage your's Documents here"}
        />
      </div>
      <div>
        <div className="flex justify-between items-center">
          <p className="font-bold text-gray-500 text-2xl">Documents</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full relative">
            Upload Document
            <input
              className="absolute w-full h-full right-0 opacity-0 cursor-pointer"
              onChange={(e) => {
                if (e.target.files) {
                  setSelectedFile(e.target.files[0]);
                }
              }}
              type="file"
              // accept={"application/pdf"}
            />
          </button>
        </div>
        {selectedFile && (
          <div>
            <Documents
              loading={loading}
              upload={true}
              onClick={uploadFileToS3}
            />
          </div>
        )}
        <div>
          {docs?.map((value) => (
            <Documents upload={false} docs={value} deleteDoc={deleteDoc} />
          ))}
        </div>
      </div>
    </div>
  );
};
