export function classNames(...args) {
  // console.log(args.toString().replaceAll(",", " "));
  return args.toString().replaceAll(",", " ");
}
export function SectionColumn({ children, className }) {
  const classes = classNames("flex", "flex-col", className);
  return <div className={classes}>{children}</div>;
}

export function SectionRow({ children, className }) {
  const classes = classNames("flex", " flex-row ", " flex-wrap   ", className);
  return <div className={classes}>{children}</div>;
}
