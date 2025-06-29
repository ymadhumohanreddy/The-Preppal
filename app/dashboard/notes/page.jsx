import React from 'react';

function Resume() {
  return (
    <>
      {/* Grid of Downloadable Resources */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-7">
        {[ 
          { title: "Git", image: "https://michster.de/content/images/size/w2000/2019/07/wasistgit_michster.png", link: "https://drive.google.com/file/d/1Ij3wlYHqb1PW_pI1JcFVKjVM7ElteR0w/view?usp=drive_link" ,link1: "https://youtu.be/S7XpTAnSDL4?feature=shared" },
          { title: "Javascript", image: "https://www.codewithharry.com/img/notes/js.webp", link: "https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/notes/JS_Chapterwise_Notes.pdf",link1: "https://youtu.be/g7T23Xzys-A?feature=shared"  },
          { title: "TypeScript", image: "https://images.ctfassets.net/23aumh6u8s0i/1GpPK36EMwOOZZcQPV4YRD/8acc95b8c3639be1be1d445e5e762dae/typescript", link: "https://drive.google.com/file/d/1ICR1Ttb0seB2QO38NVsu0CUcvW37AZH7/view?usp=sharing",link1: "https://youtu.be/4XLM2ZvtnlA?feature=shared" },
          { title: "ReactJs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQij9uDL_BAEPp_gqSI8ug_CJCjLdyw4oLDUw&s", link: "https://drive.google.com/file/d/1688SoMN4OX1hQBXxjiRuOicjH5idIjwO/view?usp=sharing",link1: "https://youtu.be/dCLhUialKPQ?feature=shared" },
          { title: "NextJs", image: "https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg", link: "https://drive.google.com/file/d/1_XclkmisTVxzsNA2lK1FCbZxm5CTmNdt/view?usp=drive_link",link1: "https://youtu.be/Zq5fmkH0T78?feature=shared" },
          { title: "TailwindCSS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s", link: "https://drive.google.com/file/d/19j1vI_rQR41qgWUMQ79_rxnWIOkDklM_/view?usp=drive_link" ,link1: "https://www.youtube.com/watch?v=6biMWgD6_JY"},
          { title: "Backend", image: "https://images.seeklogo.com/logo-png/48/1/mongodb-logo-png_seeklogo-481256.png", link: "https://drive.google.com/file/d/14l6w3xbbr6M9Skk3fvRqIgGKFi3VomYC/view?usp=sharing" ,link1: "https://youtu.be/rOpEN1JDaD0?feature=shared"},
          { title: "CN,OS,DBMS", image: "https://pbs.twimg.com/profile_images/1550409928740839425/F_REEzQ9_400x400.jpg", link: "https://drive.google.com/drive/folders/1mO3m2d9yAutNVyQNTYFk64UauokrWWO7" ,link1: "https://youtu.be/5CK8TKmc8M0?feature=shared"},
          
          
        ].map((item, index) => (
          <div key={index} className="p-6 flex justify-center">
            <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center p-6">
                <img className="mb-3 w-25 h-24 rounded-full shadow-lg" src={item.image} alt={item.title} />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.title}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Learn here</span>
                <div className="grid grid-cols-2 gap-2 mt-4">
  <a
    className="text-white bg-blue-500 rounded-full px-3 py-2 text-sm font-semibold cursor-pointer hover:bg-blue-700 text-center"
    href={item.link1}
    target="_blank"
    rel="noreferrer"
  >
    Watch
  </a>
  <a
    className="text-white bg-blue-500 rounded-full px-3 py-2 text-sm font-semibold cursor-pointer hover:bg-blue-700 text-center"
    href={item.link}
    target="_blank"
    rel="noreferrer"
  >
    Download
  </a>
</div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended Courses Section */}
      <div className="container mx-auto lg:my-2">
        {/* Title Section */}
        <h2 className="text-3xl font-medium title-font text-gray-900 my-10 text-center dark:text-white hover:underline">
          Most Reputable
        </h2>

        {/* Courses Container */}
        <div className="flex flex-wrap justify-center mx-6">
          
          {/* Course 1: Python Tutorials */}
          <div className="p-4 md:w-1/3 flex justify-center">
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg dark:bg-slate-800">
              <img className="object-contain w-full object-center" src="https://i.ytimg.com/vi/0bHoB32fuj0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBaVe7ndTXmOLmC8Yom2Grzt5dQfg" width="384" height="216" alt="DSA"/>
              <div className="px-6 md:my-11 lg:my-0 md:h-72 lg:h-64 lg:py-4 xl:h-52">
                <span className="tracking-widest text-xs title-font font-medium mb-1 dark:text-gray-400">FREE COURSE</span>
                <div className="title-font flex text-lg font-medium text-gray-900 mb-3 dark:text-white">
                  Data Structures and Algorithms(DSA)
                </div>
                <p className="text-gray-700 text-base dark:text-gray-400">
                Mastering Data Structures and Algorithms (DSA) is crucial for solving complex problems efficiently. This course will guide you through key concepts, techniques, and practical problem-solving skills that are highly valued in technical interviews.
              </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <a
                className="inline-block text-white bg-blue-500 rounded-full px-3 py-2 text-sm font-semibold mr-2 my-1 cursor-pointer hover:bg-blue-700 text-center"
                href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"  // Replace this with the correct download link
                target="_blank"
                rel="noreferrer"
              >
                Learn
              </a>
              <a
                className="inline-block text-white bg-blue-500 rounded-full px-3 py-2 text-sm font-semibold mr-2 my-1 cursor-pointer hover:bg-blue-700 text-center"
                href="https://www.youtube.com/watch?v=0bHoB32fuj0&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz"  // Replace this with the correct download link
                target="_blank"
                rel="noreferrer"
              >
                Start watching
              </a>
            </div>

            </div>
          </div>

          {/* Course 2: Ultimate JavaScript Course */}
          <div className="p-4 md:w-1/3 flex justify-center">
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg dark:bg-slate-800">
              <img className="object-contain w-full object-center" src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDWfGPsuQKuWateaRbWeBo1MDhM3A" width="384" height="216" alt="Ultimate JavaScript Course"/>
              <div className="px-6 md:my-11 lg:my-0 md:h-72 lg:h-64 lg:py-4 xl:h-52">
                <span className="tracking-widest text-xs title-font font-medium mb-1 dark:text-gray-400">FREE COURSE</span>
                <div className="title-font flex text-lg font-medium text-gray-900 mb-3 dark:text-white">
                 Full-stack Web Development
                </div>
                <p className="text-gray-700 text-base dark:text-gray-400">
                    This Full-stack Web Development course offers a deep dive into both front-end and back-end technologies. It covers essential tools and frameworks, equipping you with the skills to build dynamic, responsive web applications. Start learning and master web development!
                  </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <a
                className="inline-block text-white bg-blue-500 rounded-full px-3 py-2 text-sm font-semibold mr-2 my-1 cursor-pointer hover:bg-blue-700 text-center"
                href="https://www.codewithharry.com/"  // Replace this with the correct download link
                target="_blank"
                rel="noreferrer"
              >
                Learn
              </a>
              <a
                className="inline-block text-white bg-blue-500 rounded-full px-3 py-2 text-sm font-semibold mr-2 my-1 cursor-pointer hover:bg-blue-700 text-center"
                href="https://www.youtube.com/watch?v=tVzUXW6siu0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w"  // Replace this with the correct download link
                target="_blank"
                rel="noreferrer"
              >
                Start watching
              </a>
            </div>
            </div>
          </div>

          {/* Course 3: React JS Tutorials */}
          <div className="p-4 md:w-1/3 flex justify-center">
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg dark:bg-slate-800">
              <img className="object-contain w-full object-center" src="https://i.ytimg.com/vi/EddPAllx3sU/maxresdefault.jpg" width="384" height="216" alt="React JS Tutorials"/>
              <div className="px-6 md:my-11 lg:my-0 md:h-72 lg:h-64 lg:py-4 xl:h-52">
                <span className="tracking-widest text-xs title-font font-medium mb-1 dark:text-gray-400">FREE COURSE</span>
                <div className="title-font flex text-lg font-medium text-gray-900 mb-3 dark:text-white">
  Master Communication
              </div>
              <p className="text-gray-700 text-base dark:text-gray-400">
                Effective communication is a vital skill in both personal and professional settings. Additionally, you'll learn how to excel in interviews by mastering the art of articulation and presenting yourself effectively. These videos will help you make a lasting impression.
              </p>


              </div>
              <div className="px-6 pt-4 pb-2">
                <a
                className="inline-block text-white bg-blue-500 rounded-full px-3 py-2 text-sm font-semibold mr-2 my-1 cursor-pointer hover:bg-blue-700 text-center"
                href="https://www.youtube.com/watch?v=g0kzHjmvuYQ"  // Replace this with the correct download link
                target="_blank"
                rel="noreferrer"
              >
                Learn 
              </a>
              <a
                className="inline-block text-white bg-blue-500 rounded-full px-3 py-2 text-sm font-semibold mr-2 my-1 cursor-pointer hover:bg-blue-700 text-center"
                 href="https://www.youtube.com/watch?v=iF6-LkEXWfc"
                  // Replace this with the correct download link
                target="_blank"
                rel="noreferrer"
              >
                Start watching
              </a>
            </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Resume;
export const metadata = {
  title: "Notes | PrepPal",
  description: "Prep with Prepal to ace your next interview!",
};