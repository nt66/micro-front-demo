import { loadMicroApp, addGlobalUncaughtErrorHandler } from 'qiankun';
import React, { useState, useEffect } from 'react';

let microApp = null;

const MicroAppWrapper = ({
  id,
  name,
  entry,
  urlParams,
  appProps,
  location,
  configuration,
}) => {
  const [appError, setAppError] = useState(false);
  const containerRef = React.createRef();

  useEffect(() => {
    addGlobalUncaughtErrorHandler((event) => {
      console.log('errorEvent-qiankun----', event);
      if (event) {
        setAppError(true);
      }
    });

    microApp = loadMicroApp(
      {
        name,
        entry,
        container: containerRef.current,
        props: {
          location,
          ...appProps,
          masterProps: urlParams,
        },
      },
      {
        ...configuration,
        singular: true,
      },
    );

    return () => {
      if (microApp && microApp.getStatus() === 'MOUNTED') {
        microApp.unmount();
        microApp = null;
      }
    }
  }, [])

  return (
    <>
      {appError && <div>子应用加载失败！</div>}
      <div id="qiankunChild" key={id} ref={containerRef} />
    </>
  );
}

export default React.memo(MicroAppWrapper);
