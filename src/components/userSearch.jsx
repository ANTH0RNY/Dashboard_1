import Search from "./search";
export default function UserSearch({ handler = () => { } }) {
    return (<div className="user-search">
        <Search handler={handler} />
    </div>
    )
}