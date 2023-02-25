const navLinks = ["Home", "Contact", "About"];
export const Nav = () => {
  return (
    <div>
      <div>
        {navLinks.map((item, index) => (
          <p key={`${item}-${index}`}>{item}</p>
        ))}
      </div>
    </div>
  );
};
