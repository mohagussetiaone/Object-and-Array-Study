const app = document.getElementById('app');
import userData from "./Dict.js";
// let data = {
//     email : "mohagussetiaone@gmail.com",
//     username : "mohagussetiaone",
//     age : 23,
//     marriage: false,
// }
console.log(userData);
app.innerHTML +=`
    ${
        userData.map( (e)=>{
            return `
                <div class="user_card">
                <h3>Username: ${e.username}</h3>
                    <ul>
                        <li>ID: ${e.id}</li>
                        <li>Email: ${e.email}</li>
                        <li>Age: ${e.age}</li>
                        <li>Marriage: ${e.marriage}</li>
                    </ul>
                </div>
            `;
        }).join("")
    }
`
;