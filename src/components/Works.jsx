import propTypes from "prop-types";
export default function Work() {

    const works =[
        {
            title:"Bookmark landing page",
            details:"forntEnd mentor challegne",
            img:"/bookmark.webp",
            href:"https://ali007-depug.github.io/bookmark-landing-page-master/",
            builtWith:{
                react:"/react.webp",
                sass:"/sass.webp",
                vite:"/vite.svg"
            }
        },
        {
            title:"Multi step Form",
            details:"forntEnd mentor challegne",
            img:"/multistepform.webp",
            href:"https://bucolic-pony-727a7f.netlify.app/",
            builtWith:{
                html:"/html.webp",
                sass:"/sass.webp",
                js:"/js.webp"
            }
        },
        {
            title:"Promise Web App",
            details:"App that use to write down my habits",
            img:"/promiseApp.webp",
            href:"https://ali007-depug.github.io/promise-web-app/",
            builtWith:{
                html:"/html.webp",
                sass:"/sass.webp",
                js:"/js.webp"
            }

        },
        {
            title:"7essAbAt - حسابات",
            details:"Apps that helped me in small busniess calculation",
            img:"/7essabat.webp",
            href:"https://ali007-depug.github.io/7essAbAt-App-V2/",
            builtWith:{
                html:"/html.webp",
                sass:"/sass.webp",
                js:"/js.webp"
            }

        }
    ]
    
    const mapinnCards = works.map((work,i)=>{
        return(
            <Card key={i} title={work.title} details={work.details} thumb={work.img} href={work.href} builtWith={work.builtWith}/>
        )
    })
  return (
    <div className="px-dyp my-15 pb-10  bg-bg-color"id='works'>
    <h1 className="text-center font-bold text-fluid text-p-color mb-5">My Works</h1>
    <div className="card__wrapper grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-[10px]">
        {mapinnCards}
    </div>
    </div>
  );
}

function Card({title,details,thumb,href,builtWith}) {
  return (
    <article className="work  shadow-2xl rounded-md overflow-hidden ">
      <a href={href} target="_blank" className="group">
        <div className="work__thumb w-[100%] min-h-[178px] bg-s-color">
          <img src={thumb} alt=""  className="img__thumb w-[90%] mx-auto p-2.5 group-hover:w-[100%] group-hover:p-0 transition-all duration-300 ease-in-out "/>
        </div>

        <div className="work__content px-4 mt-6 my-3">
            <h2 className="text-p-color text-xl font-bold">{title}</h2>
            <h4 className="text-s-color text-sm font-semibold">{details}</h4>


        <div className="mt-4 flex items-center gap-3.5">
            <span className="text-n-color">Built with</span>
            {/* loop over the icons */}
            {Object.entries(builtWith ?? {}).map(([tech,iconSrc],index)=>(
                <img key={index} src={iconSrc} alt={tech} title={tech} className="w-8"/>
            ))}
        </div>
        </div>

      </a>
    </article>
  );
}

Card.propTypes = {
    title: propTypes.string.isRequired,
    details: propTypes.string.isRequired,
    thumb: propTypes.string.isRequired,
    href: propTypes.string.isRequired,
    builtWith: propTypes.object.isRequired,
    
}