function Greetings(props: {name: string, age: number}){

    return(
        <div>
            hallo your zhe best {props.name},{props.age}
        </div>
    )
}

export default Greetings;