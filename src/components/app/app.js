import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employess-add-form/employees-add-form';

import './app.css';



class App extends Component {
    constructor(props) {
        super(props)
        this.state={
            data: [
                {name: 'Ivan.', salary: 500, increase: false,rise:true, id:1},
                {name: 'John C.', salary: 800, increase: true,rise:false, id:2},
                {name: 'Alex M.', salary: 3000, increase: false, rise:false,id:3},
                {name: 'Carl W.', salary: 5000, increase: false, rise:false,id:4}
            ]
        }
        this.maxId = 4;
    }
    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise:false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }
    deleteItem=(id)=> {
        this.setState( ({data})=> {
            const index =data.findIndex(elem => elem.id===id); 
            console.log(index)
            const before =data.slice(0, index); 
            const after=data.slice(index+1); 
   
            const newArr=[...before, ...after]; 
            return {
                data:newArr
            }
            
        })
    }
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }


   
   render () {
const employees= this.state.data.length;
const incresed=this.state.data.filter(item=> item.increase).length

    
    return (
        <div className="app">
         <AppInfo employees={employees} incresed={incresed}/>
    <div className="search-panel">
<SearchPanel /> 
<AppFilter />
    </div>
    
    <EmployeesList 
    data={this.state.data}
    onDelete={this.deleteItem}
    onToggleProp={this.onToggleProp} />
    <EmployeesAddForm onAdd={this.addItem} />
            
        </div>
      );
   }
   
    }


export default App