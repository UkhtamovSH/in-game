import { useState } from "react"
import { Link } from "react-router-dom"

const OnBoarding = () => {
    const [count, setCount] = useState(1)

    const handleCount = () => setCount(count + 1)

    return (
        <>
            {
                count === 1
                    ?
                    <>
                        Сформируйте свою команду 1 <br />
                        <button onClick={() => handleCount()}>Kengisi 1</button>
                    </>
                    :
                    count === 2
                        ?
                        <>
                            Сформируйте свою команду 2 <br />
                            <button onClick={() => handleCount()}>Kengisi 2</button>
                        </>
                        :
                        count === 3
                            ?
                            <>
                                Сформируйте свою команду 3 <br />
                                <Link to="/log-in">Kengisi 3</Link>
                            </>
                            :
                            ''
            }

        </>
    )
}

export default OnBoarding
