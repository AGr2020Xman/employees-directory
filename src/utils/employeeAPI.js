import axios from "axios";

export default {
  getEmployees: function () {
    return axios.get(
      "https://randomuser.me/api/?results=50&inc=name,phone,picture,email,dob&nat=au"
    );
  }, 
};
