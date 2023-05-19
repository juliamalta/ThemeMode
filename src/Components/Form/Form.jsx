import Input from "../Input/Input"
const Form = ({onSubmit}) =>{ 
    const saveSubmit = event => {

        event.preventDefault()
        event.stopPropagation()
        const name= event.target[0].value
        const email=event.target[1].value
        onSubmit({name,email})
    }
    
    return<form  onSubmit={saveSubmit} className="w-full flex items-center flex-col justify-center p-20 gap-10  mt-20 ">

<Input type="text" required  placeholder="Digite Usuario" />
<Input type="email" required placeholder="Digite o email" />
<button type="submit" className="py-1 px-5 max-w-sm rounded-full bg-alura-100 dark:bg-dark-200 p-3 text-gray-200 dark:text-gray-200 uppercase">Seguir</button>
    </form>

}
export default Form