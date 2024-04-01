import { useEffect , useState} from "react"


export default function userInformation({route}){
     const {goalTitle, dietTitle} = route.params;

     const[goal, setGoal] = useState(goalTitle);
     const[diet, setDiet] = useState(dietTitle);

    useEffect(() => {
        db.collection('userInformation')
           .get()
           .then(result => result.docs)
           .then(docs => docs.map(doc => ({
             id: doc.id,
             name: doc.name,
             goal: doc.goal,
             dietPreferences: doc.dietPreferences,
             allergies: doc.allergies,
             risk: doc.risk,
           })))
     }, [])
}