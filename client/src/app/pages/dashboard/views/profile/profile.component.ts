import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../../../../services/profile.service";
import { ToastrService } from "../../../../../../node_modules/ngx-toastr";
import { ViewEncapsulation } from "@angular/core";
declare var $: any;
declare var io: any;
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  message: any = "";
  socketio: any;
  chatroom = $("#chatroom");
  constructor(
    public profileService: ProfileService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.socket();
  }
  socket() {
    this.socketio = io.connect("http://localhost");
    this.socketio.on('connect', function(){
      // call the server-side function 'adduser' and send one parameter (value of prompt)
      this.emit('adduser', localStorage.getItem('username'));
    });


    this.socketio.on('updatechat', function (username, data) {
      $('#conversation').append('<b>'+username + ':</b> ' + data + '<br>');
    });

    this.socketio.on("new_message", function(data) {
      $('#chatroom').append(`<div class="message-box-holder">
        <div class="message-sender">
        ${data.username}
        </div>
        <div class="message-box message-partner">
        ${data.message}
        </div>
        </div>`);
    });
    this.socketio.on("disconnect", function() {
      console.log("disconnected server");
    });
  }

  sendMessage() {
    this.socketio.emit("new_message", { message: this.message, user: localStorage.getItem('username') });
    this.message = '';
  }
}
