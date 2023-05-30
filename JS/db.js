const memberDB = new Map();
const diaryDB = new Map();

/* MemberDB START */
const addMember = (id, pwd, mail) => {
    console.log('addMember() called!');

    memberDB.set(id, {
                        u_id: id,
                        u_pwd: pwd,
                        u_mail: mail,
                    });
    
    diaryDB.set(id, []);

    console.log(memberDB.get(id));
}

const searchMember = (id, pwd) => {
    console.log('searchMember() called!');

    let memObj = memberDB.get(id);
    if (memObj != undefined && memObj.u_pwd == pwd) {
        console.log('SIGN IN SUCCESS');
        return true;
    }

    console.log('SIGN IN FAIL');
    return false;

}

/* diaryDB START */
const addDiary = (txt) => {
    console.log('addDiary() called!');

    let diaryArr = diaryDB.get(signInedMemberID);
    diaryArr.push(txt);

    console.log('diaryArr: ',diaryArr);

}

const searchDiary = () => {
    console.log('searchDiary() called!');

    let diaryArr = diaryDB.get(signInedMemberID);
    console.log('diaryArr: ',diaryArr);

    return diaryArr;
}