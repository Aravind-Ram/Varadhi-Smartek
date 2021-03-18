import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const Toastr = {

    type: "",
    title: '',
    message: '',
    options: {
        "closeButton": true,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }, 
    clear: function() {
        toastr.clear();
    },    
    success: function(message, title = "Sucesss.! You have done.") {
        this.type = "success";   
        this.message = message;    
        this.title = title;    
        return this.send();
    },
    info: function(message, title = "Info.! Kindly notice.") {
        this.type = "info";
        this.message = message;  
        this.title = title;      
        return this.send();
    },
    warning: function(message, title = "Warning.! You should aware this.") {
        this.type = "warning";
        this.message = message;    
        this.title = title;    
        return this.send();
    },
    error: function(message, title = "Error.! Sorry something went wrong.") {
        this.type = "error";
        this.message = message;   
        this.title = title;     
        return this.send();
    },
    send: function() {
        toastr.options = this.options;  
        return toastr[this.type](this.message, this.title);
    }
}
export default Toastr;