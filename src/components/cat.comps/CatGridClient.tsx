// "use client";
// import React, { useState } from "react";
// import { Catagory } from "@/app/types/catagory.model";
// import CatGridSystem from "@/components/cat.comps/catGridSystem";
// import SubCatGridSystem from "@/components/cat.comps/subCatGridSystem";
// import { getSubCatagories } from "@/app/actions/catagories.action";

// type Props = {
//   initialCatagories: Catagory[];
// };

// export default function CatGridClient({ initialCatagories }: Props) {
//   const [subCatagories, setSubCatagories] = useState<Catagory[]>([]);

//   const handleCatClick = async (_id: string) => {
//     debugger;
//     const response = await getSubCatagories(_id);
//     setSubCatagories(response?.data || []);
//   };

//   return (
//     <>
//       {/* Category Grid */}
//       <CatGridSystem catagories={initialCatagories} onCatClick={handleCatClick} />

//       {/* Subcategory Grid */}
//       {subCatagories.length > 0 && (
//         <div className="mt-10">
//           <SubCatGridSystem catagories={subCatagories} />
//         </div>
//       )}
//     </>
//   );
// }



"use client";
import React, { useState } from "react";
import { Catagory } from "@/app/types/catagory.model";

import CatGridSystem from "@/components/cat.comps/catGridSystem";
import SubCatGridSystem from "@/components/cat.comps/subCatGridSystem";
import { getSubCatagoriesServer } from "@/app/actions/getSubCatagoriesServer.action";

type Props = {
  initialCatagories: Catagory[];
};

export default function CatGridClient({ initialCatagories }: Props) {
  const [subCatagories, setSubCatagories] = useState<Catagory[]>([]);

  const handleCatClick = async (catId: string) => {
    debugger;
    // ✅ server action
    const data = await getSubCatagoriesServer(catId);
    setSubCatagories(data);
  };

  return (
    <>
      <CatGridSystem catagories={initialCatagories} onCatClick={handleCatClick} />
      {subCatagories.length > 0 && (
        <div className="mt-10">
          <SubCatGridSystem catagories={subCatagories} />
        </div>
      )}
    </>
  );
}
