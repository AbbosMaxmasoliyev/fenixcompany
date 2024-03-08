import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { Accordion, } from 'react-bootstrap';
	
const defaultAccordion = [
	{
	  title: `1. Web sayt qildirsam mijozlar oqimi qanchalik ko'payadi? `,
	  text:
		`Birgina web sayt qilish bilan sizning mijozlaringiz ko'payib qolmaydi, siz uning uchun biznesingiz marketingini web sayt uchun ishlatishingiz kerak.`,
	},
	{
	  title: `2. Mening biznesimda marketing nima uchun kerak?`,
	  text:
		`Marketing sizning biznesingiz uchun mijozlar oqimini boshqarib beradi.`,
	},
	{
	  title: `3. SMM bu faqat postlarni instagramga joylashtirishmi?`,
	  text:
		`Postlarni ijtimoiy tarmoqlarga joylashtirish bu SMM ning bir qismi. Brend marketingini to'g'ri strategiya asosida olib borish.`,
	},
	{
	  title: '4. Nimaga meni saytimga odamlar kam kiryapti?',
	  text:
		`Sayt sizga mijozlaringiz uchun ma'lumot berish uchun ko'rinib turuvchi dasturiy ta'minot. Insonlar kirishi uchun siz sayt marketingini ham to'g'ri yuritish zarur.`,
	},
	{
	  title: '5. Nega saytimni googledan yozsam tepada chiqmaydi?',
	  text:
		`Saytingiz qidiruv tizimlarida yuqori o'rinlarda turishi uchun siz SEO(Search Engine Optimization) xizmatidan foydalanishingiz kerak.`,
	},
		
]	
const AccordionBlog = () => {
	const [activeDefault, setActiveDefault] = useState(0)
	return(
		<Accordion className="accordion dlab-accordion faq-1 box-sort-in m-b30"  defaultActiveKey="-1">
			{defaultAccordion.map((d, i) => (
			   <div className="panel">
					<div className="acod-head">
						<h6 className="acod-title">
							<Accordion.Toggle as={Link} variant="link"
								className={` ${ activeDefault === i ? '' : 'collapsed'}`}
								onClick={() =>
									setActiveDefault(activeDefault === i ? -1 : i)
								} eventKey={`${i}`}>	
								 {d.title}		
							</Accordion.Toggle>
						</h6>	
					</div>
						
				<Accordion.Collapse eventKey={`${i}`} className="acod-body">
				  <div className="acod-content">
					{d.text}
					</div>
				</Accordion.Collapse>
			  </div>
			))}
		</Accordion>	
	)
}
export {defaultAccordion};
export default AccordionBlog;