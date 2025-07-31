// useToaster.ts

import { useState } from "react";

export function useToasterLogic() {
  const [visible, setVisible] = useState(false);
  const showToast = () => setVisible(true);
  const hideToast = () => setVisible(false);

  return { visible, showToast, hideToast };
}
