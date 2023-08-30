import React, {useState} from 'react';
import './accordion.css';

const dataCollection=[
    {
        id: 1,
        title: "Is this a good product?",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
      },
      {
        id: 2,
        title: "How is this a good product?",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
      },
      {
        id: 3,
        title: "How much does it cost?",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
      },
      {
        id: 4,
        title: "How much does it cost?",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
      },
]

export default function Accordion() {
const [accordion,setAccordion] =useState(0);
    
    function toggleAccordion(index){
        if( accordion == index) {
            setAccordion ();
            return;
        }
        setAccordion(index);
    }

    return (
        <>
        <div className='container'>
            <h2 className='accordion_title'> FAQ Question and Accordion</h2>
            <div className='accordion_faq'>
                {dataCollection.map((item,index) => (
                    <div key={index} onClick={()=> toggleAccordion(index)}>
                    <div  className='accordion_faq_heading' >
                         <h3 className={ accordion === index ? "active" : ""}> {item.title}</h3>
                        <div>
                            {accordion === index ? (
                                <> <span className='vaerticle'> +</span> </>
                            ) : (<>  <span className='vaerticle'> -</span></>)}
                           
                        </div>
                        </div>
                        <div>
                            <p className={ accordion === index ? "active" : "inactive"}>{item.info}</p>
                        </div>
                    </div>
                   
                ))
                }
                
            </div>
        </div>
        </>
    );
}