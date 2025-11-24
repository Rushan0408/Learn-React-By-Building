import Tabs from "./Tabs"

const TabsPage = () => {

    const data = [
        {
            label : "Tab 1",
            content : <div> This is content of tab 1 </div>
        },
        {
            label : "Tab 2",
            content : <div> This is content of tab 2 </div>
        },
        {
            label : "Tab 3",
            content : <div> This is content of tab 3 </div>
        }
    ]

    return <Tabs tabsContent={data} />
}

export default TabsPage