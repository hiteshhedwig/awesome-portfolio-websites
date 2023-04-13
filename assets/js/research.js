/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Analytical and Computational Modelling of Go-Kart Powertrains",
    authors:
      "Hitesh Kumar, Aditya Natu, Kunal Mathur",
    conferences:
      "International Journal of Mechanical and Production Engineering Research and Development (IJMPERD)",
    researchYr: 2020,
    citebox: "popup1",
    image: "assets/images/research-page/research_gokart.png",
    citation: {
      vancouver:
        "Hitesh Kumar, Aditya Natu, Kunal Mathur. Analytical and Computational Modelling of Go-Kart Powertrains.",
    },
    abstract:
      "In this study, we have a unique methodology of developing two types of transmission systems for a go-kart with known specifications depicted and compared later on. The two different forms of transmission systems are viz. manual transmission (with a fixed gearbox) and semi-automatic transmission (with a belt and pulley based CVT or Continuous Variable Transmission). These designs were later validated by fatigue analysis using CAE (Computer Aided Engineering). The detailed methodology also describes how the two systems have been compared on the basis of their performance on the Go-kart in terms of acceleration (using analytical and computational approaches), intensity of the design-calculation process and several other theoretical factors. The analytical approach computes the time taken by the go-kart (with both the transmissions individually) to accelerate to its top speed using simultaneous differential equations that incorporate rolling resistance. Computational approach achieves the same purpose by physical modelling of the entire go-kart powertrain using MATLAB Simscape that solves complex dynamic equations while considering multiple derating factors. The correlation between the analytical and computational results of a particular driveline is used to validate the simulations performed and the assumptions made.",
    absbox: "absPopup1",
  },
  {
    title: "Estimation Of Surface Roughness in turning operations using Multivariate Polynomial Regression",
    authors:
      "Hrishabh Jha, Ashutosh Panpalia, Devanshu Suneja, Geetanshu Ashpilya, Hitesh Kumar, and Vijay Gautam",
    conferences:
      "Advances in Industrial and Production Engineering ",
    researchYr: 2020,
    citebox: "popup1",
    image: "assets/images/research-page/researchpaper_polynomial.png",
    citation: {
      vancouver:
        "Hrishabh Jha, Ashutosh Panpalia, Devanshu Suneja, Geetanshu Ashpilya, Hitesh Kumar, and Vijay Gautam. Estimation Of Surface Roughness in turning operations using Multivariate Polynomial Regression.",
    },
    abstract:
      "Surface Roughness plays a huge role in determining the durability of components. Surfaces are required to be within desired limits of roughness values to ensure high performance. Being able to predict the surface roughness without using stylus-based instruments reduces the tool changing and measuring time hence decreasing the overall machining time. The experiment suggests a statistical approach to predict the surface roughness before the machining operation based on the previous performance of the tool. The cumulative length of the chips generated was used along with the three cutting parameters, i.e. cutting speed, feed, and depth of cut to predict the surface roughness of the material depending on the number of operations performed on the lathe machine. An algorithm based on multivariate polynomial regression was used to predict the surface roughness of the material corresponding to the usage based on the experiments that were conducted on the Mild Steel Rod by using an HSS tool. This dynamic prediction will help determine the right time to change the tool according to the given machining parameters and hence increase the tool life.",
    absbox: "absPopup1",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
