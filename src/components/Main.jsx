import user from "./images/user-regular.svg"
import work from "./images/briefcase-solid.svg"
import edu from "./images/graduation-cap-solid.svg"
import Index from "./Index";
import Work from "./Work";
import Education from "./Education";
import Contact from "./Contact";

export default function Main({page}){

    console.log(page);

    const getPage =()=>{
        switch (page) {
            case "main":
                return user
        
            case"work":
                return work
    
            default:
                return edu;
        }
    }

    const getPageContent= ()=>{
        switch (page) {
            case "work":
               return <Work/>

            case "education":
                return <Education/>

            case "contact":
                return <Contact/>

            default:
                return  <Index/>

        }
    }
    
    return(
        <>
    <main>
        <div className={page !== "contact" ?"content-wrapper":""}>
          {page !== "contact" && <img
            id="headshot"
            src={getPage()}
            alt="A professional headshot"
          />}
          {getPageContent()}
        </div>
      </main>
      <hr />
      </>)
}