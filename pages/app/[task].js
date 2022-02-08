import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import GeneratingBox from "components/contentgenerate";
import { SpecialLayout as Layout } from "@/layout";
import { GenerateSidebar, MainSidebar } from "@/components/sidebar";
import { setCurrentActiveKeyState } from "@/redux/slices/content";
import { selectors as uiSelector } from "@/redux/slices/ui";
import { SubscriberModal } from "@/components/modals/subscriber";
import { useWindowSize, useSidebar, useUser } from "@/hooks";

const AppItem = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { showSidebar, showContent } = useSidebar();
  const { isAuth, userInfo } = useUser();

  const { query, isReady } = router;
  const { task } = query;
  const { subscriber } = useSelector(uiSelector.getModal);

  useEffect(() => {
    if (isReady && task) dispatch(setCurrentActiveKeyState(task));
  }, [dispatch, isReady, task]);

  const { width: windowWidth } = useWindowSize();

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          {showSidebar && <MainSidebar />}
          {showContent && (
            <>
              <div
                className={`col-lg-${windowWidth < 1600 ? "3" : "2"}`}
                style={{
                  paddingTop: "15px",
                  borderRight: "1px solid rgba(0,0,0,.1)",
                }}
              >
                <GenerateSidebar />
              </div>
              <div className={`col-lg-${windowWidth < 1600 ? "9" : "10"}`}>
                <GeneratingBox />
              </div>
            </>
          )}
        </div>
      </div>
      {subscriber?.usage && <SubscriberModal />}
    </Layout>
  );
};

export default AppItem;
