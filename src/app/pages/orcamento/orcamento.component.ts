import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      obs: new FormControl('')
    })
  }

  onSubmit(){
    if(this.clientForm.valid){
      console.log(this.clientForm.value);
    }
  }

}
