import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getEventDetails } from "../../api/eventApi";

function ViewProject() {
  const router = useRouter();
  const { viewProject } = router.query;
  const [res, setRes] = useState();
  useEffect(() => {
    getEventDetails(viewProject)
      .then((res) => setRes(res))
      .catch((e) => console.log(e));
  }, [viewProject]);

  return (
    <div>
      ViewProject ===== <pre> {JSON.stringify(res, "", 2)}</pre>
    </div>
  );
}

export default ViewProject;
