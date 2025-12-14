import React from 'react'
import  './contact.css'
import phone from '../../../assets/icons/phonebis.png'
import mail from '../../../assets/icons/searchbis.png'
import call from '../../../assets/icons/codebis.png'
import location from '../../../assets/icons/destinationbis.png'

export default function Contact() {
    const con = [
        { id: 1, icon:phone, info: "+91-8095154990" },
        { id: 2, icon: mail, info: "sonaliirannavar45@gmail.com" },
        { id: 3, icon: call, info: "#" },
        { id: 4, icon: location, info: "Kharadi, Pune 411014, India" },


    ];

    const edu=[
        {id:1,course:"Bachelor of Engineering",college:"S G Baekundri Institute",year:"2018-2022"},
        {id:2,course:"Higher School Certificate",college:"MGVM PU College",year:"2016-2018"},
        {id:3,course:"Secondary School Certificate",college:"St Joseph’s Convent High School",year:"2000 - 2016"}];

        const skill=["HTML","CSS","JS","ReactJs","TailwindCSS","Bootstrap","MUI","Antd","Redux","UnoCSS","Git","Vs_code"
                ];



    return (
        <div className='head' ><div style={{fontWeight:'900'}} >Contact Me</div>
        {con.map(item =>(
            <div key={item.id} className="subC">
                   <div  className="sub1"><img src={item.icon}/></div>
                        <div className="sub2">{item.info}</div>
                         </div>
                ))}
                <div > <div style={{fontWeight:'900'}}>Education:</div>
                    {edu.map(item1=>(
                    <div key={item1.id} className='edu'>
                        <div className=''>{item1.course} </div>
                        <div style={{fontWeight:'900'}}>{item1.college}</div>
                        <div className=''>{item1.year}</div>
                    </div>

                    ))}
                  </div>
                  <div> <div style={{fontWeight:'900'}}>Skills:</div>
                    <ul className='lis'>
                        {skill.map((skill)=>(
                        <li  key={skill}> {skill}</li>
                        ))}
                    </ul>
                  </div>

           





        </div>
    )
}
