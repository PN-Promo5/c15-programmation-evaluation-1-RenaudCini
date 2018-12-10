
salary ();



 /*Fonction exercice 1*/
function name_first_name ()
{

let name = null
let first_name = null

 /*new div*/
document.body.appendChild(document.createElement("br"))
  let first_interface = document.createElement("div")
  document.body.appendChild(first_interface)

   /*new forumlair*/
  let formulaire = document.createElement("form");
  first_interface.appendChild(formulaire)
  /*cree un paragraphe*/
 let  paragraphe= document.createElement("p")
formulaire.appendChild(paragraphe)


 /*new lable first name*/
 let first_name_label = document.createElement("label");
first_name_label.textContent = "Quel est votre prénom ? "
first_name_label.style.margin = "10px";
paragraphe.appendChild(first_name_label);

 /*new input first_name*/
let first_name_input = document.createElement("input")
first_name_input.type ="text"
paragraphe.appendChild(first_name_input)


paragraphe.appendChild(document.createElement("br"))


 /*new label name*/
let name_label = document.createElement("label");
name_label.style.margin = "20px";
name_label.textContent = "Quel est votre nom ? "
paragraphe.appendChild(name_label);

 /*new inpute name*/
let name_input = document.createElement("input")
first_name_input.type ="text"
paragraphe.appendChild(name_input)

paragraphe.appendChild(document.createElement("br"))

 /*new ok*/
let button_ok = document.createElement("input");
button_ok.type ="button";
button_ok.value = "OK";
paragraphe.appendChild(button_ok)
name = name_input.textContent;
first_name = first_name_input.textContent;
paragraphe.appendChild(document.createElement("br"))


 /* error();*/
let error = document.createElement("label")
error.textContent ="vous avez fait une erreur"
 error.hidden = true
 paragraphe.appendChild(error)

button_ok.addEventListener("click",next,false)

 /*function*/
function next ()
{
  name = name_input.value;
  first_name = first_name_input.value;

   /*if the user has forgotten about an information*/
  if(first_name == "" | first_name ==  null |name == "" | name_input == null)
  {

    error.hidden = false
  }
   /*
if all the info is back*/
  else {

    first_interface.hidden = true

      let paragraphe_welcom = document.createElement("p")
      document.body.appendChild(paragraphe_welcom)


    let welcome = document.createElement("label");
    welcome.textContent = "Bonjour " + first_name + "" + name
  paragraphe_welcom.appendChild(welcome);

  }
}
}


   /*fonction exercice 2*/
  function  salary ()
{

  let  brut_monthly_salary = null;
  let net_monthly_salary = null;
  let net_annual_salary =null;
  let brut_annual_salary = null;


  document.body.appendChild(document.createElement("br"))
    let first_interface = document.createElement("div")
    document.body.appendChild(first_interface)

    let formulaire = document.createElement("form");
    first_interface.appendChild(formulaire)
    /*new paragraphe*/
   let  paragraphe= document.createElement("p")
  formulaire.appendChild(paragraphe)


   /* lable brut_monthly_salary*/
   let brut_monthly_salary_label = document.createElement("label");
  brut_monthly_salary_label.textContent = "Salaire mensuel brut "
brut_monthly_salary_label.style.margin = "10px";
  paragraphe.appendChild(brut_monthly_salary_label);

   /*inpute brut_monthly_salary*/
  let brut_monthly_salary_input = document.createElement("input")
  brut_monthly_salary_input.type ="number"
  brut_monthly_salary_input.classList.add("input1");
  paragraphe.appendChild(brut_monthly_salary_input)

brut_monthly_salary = brut_monthly_salary_input.value

  paragraphe.appendChild(document.createElement("br"))





/*inpute brut_monthly_salary*/
  let net_monthly_salary_label = document.createElement("label");
net_monthly_salary_label.textContent = "Salaire mensuel net "
net_monthly_salary_label.style.margin = "12px";

 paragraphe.appendChild(net_monthly_salary_label);

  /*cree le champ de texte prenom*/
 let net_monthly_salary_input = document.createElement("input")
 net_monthly_salary_input.type ="number"
 net_monthly_salary_input.classList.add("input2");
 paragraphe.appendChild(net_monthly_salary_input)

net_monthly_salary = net_monthly_salary_input.value

  paragraphe.appendChild(document.createElement("br"))







    let brut_annual_salary_label = document.createElement("label");
    brut_annual_salary_label.textContent = "Salaire annuel brut "
  brut_annual_salary_label.style.margin = "15px";
   paragraphe.appendChild(brut_annual_salary_label);

    /*cree le champ de texte prenom*/
   let brut_annual_salary_input = document.createElement("input")
   brut_annual_salary_input.type ="number"
   brut_annual_salary_input.classList.add("input3");
   paragraphe.appendChild(brut_annual_salary_input)

   brut_annual_salary = brut_annual_salary_input.value

   paragraphe.appendChild(document.createElement("br"))





     let net_annual_salary_label = document.createElement("label");
     net_annual_salary_label.textContent = "Salaire annuel brut "
   net_annual_salary_label.style.margin = "15px";
    paragraphe.appendChild(net_annual_salary_label);

     /*cree le champ de texte prenom*/
    let net_annual_salary_input = document.createElement("input")
    net_annual_salary_input.type ="number"
    net_annual_salary_input.classList.add("input4");
    paragraphe.appendChild(net_annual_salary_input)
    paragraphe.appendChild(document.createElement("br"))




brut_monthly_salary_input.addEventListener("input",calcul_brut_monthly,false)
net_monthly_salary_input.addEventListener("input",calcul_net_monthly,false)

function calcul_brut_monthly()
{
/*modifi les valuer de net pa moi*/
brut_monthly_salary=brut_monthly_salary_input.value

net_monthly_salary = brut_monthly_salary/1.298
net_monthly_salary_input.value = net_monthly_salary

net_annual_salary_input.value = net_monthly_salary*12

brut_monthly_salary = brut_monthly_salary_input.value
brut_annual_salary_input.value = brut_monthly_salary*12
}

function net_monthly()
{
  net_monthly_salary =net_monthly_salary.valuer

  brut_monthly_salary = net_annual_salary *1.298
  
}



}
