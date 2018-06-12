import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var $ : any;

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.css']
})
export class OrcamentoComponent implements OnInit {

  clientForm : FormGroup;
  emailPattern = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.clientForm = new FormGroup({
      nome : new FormControl('', Validators.required),
      email : new FormControl('',[
        Validators.required, Validators.pattern(this.emailPattern)
      ]),
      telefone: new FormControl('', Validators.required),
      obs: new FormControl(''),
      produto: new FormControl('')
    })

    
  };
  

  onSubmit(){
    if($('.produto:checked').length != 0){
      var prod = new Array();

      $('.produto:checked').each(function(){
        prod.push($(this).val());
      })
    }
    let data = {
      service_id: 'smtp_server',
      template_id: 'e_mail_de_contato',
      user_id: 'user_C1XGyAKMxEjWvAHrgCU5s',
      template_params: {
        "name": this.clientForm.value.nome,
        "email": this.clientForm.value.email,
        "telefone": this.clientForm.value.telefone,
        "produtos": prod.join(", "),
        "message": this.clientForm.value.obs
      }
    }
    if(this.clientForm.valid){
      $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
      }).done(function() {
          alert('Your mail is sent!');
      }).fail(function(error) {
          alert('Oops... ' + JSON.stringify(error));
      });
      console.log(data);
    }
  }

}
