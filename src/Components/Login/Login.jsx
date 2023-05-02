import { useState } from "react";

export const Login = () => {
    const [login, setLogin] = useState(true);
    
    const submit = ($event) => {
        event.preventDefault();
        if (login) {
            let email = event.target.lemail.value;
            let password = event.target.lpassword.value;
            console.log(email, password);
            //TODO  קריאת שרת לאימות נתונים
        }
        else {
            let email = event.target.semail.value;
            let password = event.target.spassword.value;
            let password2 = event.target.spassword2.value;
            let name = event.target.sname.value;
            if(! password === password2){
                //TODO להציג שגיאה
            }
            console.log(email, password, password2, name)
        }
    }


    return <>
        <form name="loginForm" onSubmit={submit}>
            {login ?
                <>
                    <button type="button" onClick={() => setLogin(false)}>להרשמה</button>
                    <input type="email" name="lemail" placeholder="username@domain.com" />
                    <input type="password" name="lpassword" id="lpassword" placeholder="הכנס סיסמא" />
                </>
                :
                <>
                    <button type="button" onClick={() => setLogin(true)}>להתחברות</button>
                    <input type="email" name="semail" placeholder="username@domain.com" />
                    <input type="password" name="spassword" id="spassword" placeholder="הכנס סיסמא" />
                    <input type="password" name="spassword2" id="spassword2" placeholder="אימות סיסמא" />
                    <input type="text" name="sname" id="sname" placeholder="הכנס שם" />
                    {/* //TODO בחירת קבוצה ע"י dropdown */}
                </>
            }
            <button type="submit">אישור</button>
        </form>

    </>

}
