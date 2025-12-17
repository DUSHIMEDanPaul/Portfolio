import React,{useRef,useState} from 'react'
import { EmailJSResponseStatus } from '@emailjs/browser'
function Contact() {
    const formRef=useRef()
    const[loading,setLoading]=useState(false)
    const [form,setForm]=useState({
        name:'',
        email:'',
        message:''
    })
const handleChange=({target:{name,value}})=>{
    setForm({...form,[name]:value})
}    
const handleSubmit=async (e)=>{
e.preventDefault()
setLoading(true)
try{
await emailjs.send()
setLoading(false)
alert('Your message has been sent!')
setForm({
    name:'',
    email:'',
    message:''
})
}catch(error){
setLoading(false)
console.log(error)
alert('Something went wrong!')
}


}   
  return (
    <section className='c-space my-20' id='contact'>
    <div className='relative py-20 flex items-center justify-center flex-col'>
        <img src='/assets/terminal.png' alt='terminal background' className='absolute inset-0 object-cover'/>
<div className='relative z-10 max-w-2xl w-full px-6'>
<h3 className='head-text'>let's talk </h3>
<p className='text-lg text-white-600 mt-3'>wether you are looking to build a new website,improve your existing platforms, or bring a unique project to life, I'm here to help</p>
<form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
<label className='space-y-3'>
<span className='field-label'>Full Name</span>
<input type='text' name='name' value={form.name} onChange={handleChange} required className="field-input" placeholder='john doe'/>
</label>
<label className='space-y-3'>
<span className='field-label'>Email</span>
<input type='email' name='email' value={form.email} onChange={handleChange} required className="field-input" placeholder='johndoe@gmail.com'/>
</label>
<label className='space-y-3'>
<span className='field-label'>Your Message</span>
<textarea type='text' name='message' rows={5} value={form.message} onChange={handleChange} required className="field-input" placeholder='Helo......'/>
</label>
<button className='field-btn' type='submit' disabled={loading}>
{loading?'Sending.....':'Send Message'}
<img src='/assets/arrow-up.png' alt='arrow-up' className='field-btn_arrow'/>
</button>
</form>
</div>
         
    </div>
     
    </section>
  )
}

export default Contact
