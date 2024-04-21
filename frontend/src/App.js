import React,{lazy,Suspense}  from 'react';

const Header =lazy(()=>import("./components/Header"));
const HeaderNext =lazy(()=>import("./components/HeaderNext"));
const UpcomingEvents =lazy(()=>import("./components/UpcomingEvents"));
function App() {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Header/>
        <HeaderNext/>
        <UpcomingEvents/>
      </Suspense>
    </div>
  )
}

export default App;
