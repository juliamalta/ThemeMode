
const Form = ({onSubmit}) =>{ 
    const saveSubmit = event => {

        event.preventDefault()
        event.stopPropagation()
        const name= event.target[0].value
        const email=event.target[1].value
        onSubmit({name,email})
    }
    
    return<form  onSubmit={saveSubmit} className="w-full flex items-center flex-col justify-center p-20 gap-10  mt-20 ">

<input type="text" className="alura-input " required  placeholder="Digite Usuario" />
<input type="email" className="alura-input" required placeholder="Digite o email" />
<button type="submit" className="alura-button">Seguir</button>
    </form>

}
export default Form