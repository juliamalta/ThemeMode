
const Article = ({ title ,text ,tags ,image,alt}) => {
    return <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-md sm:grid-cols-2  lg:grid-cols-3 lg:max-w-[1000px]">
<h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold flex flex-col items-center ">{title}</h3>
<div className="grid gap-1 ">
    {
text.map((content, index) => <p key={index} className="text-alura-200 dark:text-gray-400">{content}</p>)
    }
</div>

{ image && <img className="p-4" src={image}/>}
{image && alt && <span className="sr-only">{alt}</span>} 


    </div>
}

export default Article