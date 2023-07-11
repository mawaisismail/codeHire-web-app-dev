export const UserAvatar = ({
  src,
  name,
  size,
}: {
  src: string;
  name?: string;
  size?: string;
}) => {
  return (
    <img
      className={`block rounded-full ${size || "h-[90px] w-[90px]"}`}
      src={src || `https://eu.ui-avatars.com/api/?name=${name || "Awais"}`}
      alt="user photo"
      onError={(e) =>
        (e.currentTarget.src = `https://eu.ui-avatars.com/api/?name=${
          name || "Awais"
        }`)
      }
    />
  );
};
