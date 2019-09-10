import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  protected usuario:Usuario = new Usuario;
  constructor(
    protected usuarioService:UsuarioService
  ) { }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(this.usuario);
    this.usuarioService.save(this.usuario).subscribe(
      res=>{
        console.log("Cadrastado",res);
      },
      xuxu=>{
        console.log("Não cadastrado",xuxu);
        
      }
    )
  }
}
