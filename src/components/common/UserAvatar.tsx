export const UserAvatar = ({
  src,
  name,
  size,
}: {
  src: string;
  name: string;
  size?: number;
}) => {
  return (
    <img
      className={`inline-block h-${size || 10} w-${size || 10} rounded-full`}
      src={src || `https://eu.ui-avatars.com/api/?name=${name}`}
      alt="user photo"
      onError={(e) =>
        (e.currentTarget.src = `https://eu.ui-avatars.com/api/?name=${
          user?.name || name
        }`)
      }
    />
  );
};
