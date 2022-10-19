const IconNavbar = ({
  versionSimple,
  withBorder,
  className,
}: {
  versionSimple?: boolean;
  className?: string;
  withBorder?: boolean;
}) => (
  <div
    className={className}
    style={{
      width: "32px",
      height: "32px",
      color: versionSimple ? "var(--color-primario)" : "white",
      fontFamily: "var(--fuente-logotipo)",
      backgroundColor: versionSimple ? "white" : "var(--color-primario)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "8px",
      border: withBorder ? "1px solid white" : "",
    }}
  >
    <h3
      style={{
        fontWeight: "lighter",
      }}
    >
      DG
    </h3>
  </div>
);

export default IconNavbar;
