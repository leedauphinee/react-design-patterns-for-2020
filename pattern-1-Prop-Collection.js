import React from "react";

/**
 * Without Prop Collection
 */
export default function LayoutComponent({
  styles,
  copy,
  data,
  pageTitle,
  section
}) {
  return (
    <div className="App">
      <h1>{pageTitle}</h1>
      {section === "secion-1" && (
        <SubComponent1 styles={styles} copy={copy} data={data} />
      )}
      {section === "secion-2" && (
        <SubComponent2 styles={styles} copy={copy} data={data} />
      )}
      {section === "secion-3" && (
        <SubComponent3 styles={styles} copy={copy} data={data} />
      )}
    </div>
  );
}

/**
 * With Prop Collection
 */
export default function LayoutComponent({
  pageTitle,
  section,
  ...propCollection // Rest Operator
}) {
  return (
    <div className="App">
      <h1>{pageTitle}</h1>
      {section === "secion-1" && <SubComponent1 {...propCollection} />}
      {section === "secion-2" && <SubComponent2 {...propCollection} />}
      {section === "secion-3" && <SubComponent3 {...propCollection} />}
    </div>
  );
}
