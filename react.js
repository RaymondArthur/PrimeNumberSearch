import styles from './styles.css'

//H1 heading component to store page title
class Heading extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <h1 className={styles.heading}>{this.props.title}</h1>
        );
    }
}

//Button component to store 'Find Primes' button
//note the onClick event being linked to the findPrimes function being passed in as a prop
class Button extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <button className='button' onClick={this.props.findPrimes}>
                    {this.props.buttonText}
                </button>
            </div>
        );
    }
}

//Component to accept user input of 'n'
class InputBox extends React.Component{
    constructor(props){
        super(props);
    }

    onChange(event){
        this.props.value = event.target.value;
    }

    render(){
        return(
            <form>
                <label>
                    Please enter a postitive integer <em>n</em>:
                    <br/>
                    <input className='inputBox' onChange = {this.props.onChange} type='number' min ='1'/>    
                </label>
            </form>
        );
    }
}

//Component to display the 'message' prop based on either page load or the user running the findPrimes function
class Results extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <p className='results'>{this.props.message}.</p>
            </div>
        );
    }
}

//The ancestral component that manages state and the instances of child components.
class Page extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            n:'',
            result:'',
            message:'Please enter an integer greater than 0 and click "Find Primes"',
            timeTaken: '',
        }

        this.setN=this.setN.bind(this);
        this.findPrimes=this.findPrimes.bind(this);
    }

    findPrimes(state,props){
        let start = Date.now();  
        let findPrimeResult = findPrimes(this.state.n);
        let finish = (Date.now()-start);
        this.setState({
            result:findPrimeResult,
            message:'There are ' + findPrimeResult + ' primes between 1 and ' + this.state.n + 
                '.  Time taken: ' + finish + 'ms'
        });
    }

    setN(event){
        this.setState({
            n: event.target.value
        })
    }

    render(){
        return(
            <div>
                <Heading title={this.props.title}/>
                <InputBox value={this.state.n} onChange={this.setN}/>
                <Button onClick = {this.setN} 
                    findPrimes={this.findPrimes} 
                    buttonText={this.props.buttonText}
                    />
                <Results message = {this.state.message}/>
            </div>
        );
    }
}

//Rendering the Page ancestral component to the React DOM
ReactDOM.render(<Page title='Sieve of Eratosthenes'
    buttonText = 'Find Primes'/>,
    document.getElementById('root'));
