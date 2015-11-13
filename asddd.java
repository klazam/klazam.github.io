public boolean Login(String name, String pass){
        Get_Data_Base_Value b = new Get_Data_Base_Value();
        List<User> users = b.selectUser();
        String newpass = szyfrCezara(pass, 3);
        for(User k: users){
            if(k.getUserName().equals(name)){
                if(k.getPassword3().equals(newpass)){
                    b.invalidLogin(name, 0);
                    b.CloseConnection();
                    return true;
                }else{
                    int wrong = k.getWrongLogin();
                    wrong++;
                    if(wrong==5 && (getMailCodeByName(name)==null)){
                        String code = UUID.randomUUID().toString();
                        b.invalidLogin(name, 0);
                        b.changeMailCodeAfterWrongLogin(name, szyfrCezara(code, 3));
                        sendEmail(k.getEMail(), "Mail code", code);
                        b.CloseConnection();
                        return false;
                    }else{
                        b.invalidLogin(name, wrong);
                        b.CloseConnection();
                        return false;
                    }
                }
            }
        }
        b.CloseConnection();
        return false;
    }