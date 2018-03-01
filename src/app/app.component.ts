import { Component, DoCheck } from '@angular/core';
import { Observable } from "rxjs/Rx"
import { Translate  } from './model/translate';
import { TranslateService } from './services/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [ TranslateService ]
})
export class AppComponent implements DoCheck{

  public _translate : Translate;
  public  targetTest: any;
  public  title = 'Test Alto Translate';
  public  translateResponse : Observable<any>;

  constructor(private _target: TranslateService ){
    this._translate =  new Translate("","");
    this.getLanguages()
  }

  ngDoCheck(){

  }
  onSubmit(){


      this._target.postTranslateText(this._translate).subscribe( response => {
            console.log(response.data.translations[0].translatedText);
            //this.translateResponse.push()
            this.translateResponse =  response.data.translations[0].translatedText
            console.log('trans',this.translateResponse);
      });



  }


  getLanguages(){
    this._target.getTargetLang().subscribe(
      data => {
           this.targetTest = data.data.languages
      },
      error => console.log(error)
    )


  }


}
