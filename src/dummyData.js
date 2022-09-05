import { v4 as uuidv4} from "uuid"; 

const dummyData = [
  {
    id: uuidv4(),
    title: "11時",
    tasks: [
      {
       id:uuidv4(),
       title: "tomita"
      },
      {
       id: uuidv4(),
       title: "harada"
      },
      {
       id: uuidv4(),
       title: "iwasita"
      }
    ]
  },
  {
    id: uuidv4(),
    title: "12時",
    tasks: [
      {
       id:uuidv4(),
       title: "sinoda"
      },
      {
       id: uuidv4(),
       title: "taniguti"
      },
      {
       id: uuidv4(),
       title: "yamada"
      }
    ]
  },
  {
    id: uuidv4(),
    title: "13時",
    tasks: [
      {
       id:uuidv4(),
       title: "sakasita"
      },
      {
       id: uuidv4(),
       title: "kuriki"
      },
      {
       id: uuidv4(),
       title: "tanaka"
      }
    ]
  },
  {
    id: uuidv4(),
    title: "14時",
    tasks: [
      {
       id:uuidv4(),
       title: "tarou"
      },
      {
       id: uuidv4(),
       title: "sitou"
      },
      {
       id: uuidv4(),
       title: "suzuki"
      }
    ]
  },
]

export default dummyData; 
;