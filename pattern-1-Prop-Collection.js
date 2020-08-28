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
  const sections = {
    'section-1': SubComponent1,
    'section-2': SubComponent2,
    'section-3': SubComponent3,
  };
  const SubComponent = sections[section];
  
  return (
    <div className="App">
      <h1>{pageTitle}</h1>
      <SubComponent styles={styles} copy={copy} data={data} />
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
  const sections = {
    'section-1': SubComponent1,
    'section-2': SubComponent2,
    'section-3': SubComponent3,
  };
  const SubComponent = sections[section];

  return (
    <div className="App">
      <h1>{pageTitle}</h1>
      <SubComponent {...propCollection} />
    </div>
  );
}
