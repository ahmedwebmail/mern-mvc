export const signinUser = async (req, res) => {
    
    try {
        return res.json("User signed in");
    }
    catch (error) {
        return res.status(500).json({ status: 'Fail', 'Message':error.toString() });
    }
}

export const verifyLogin = async (req, res) => {
    
    try {
        return res.json("User signed in");
    }
    catch (error) {
        return res.status(500).json({ status: 'Fail', 'Message':error.toString() });
    }
}