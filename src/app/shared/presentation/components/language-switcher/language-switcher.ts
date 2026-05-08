import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  imports: [MatButtonToggleModule],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.css',
})
export class LanguageSwitcher {
  protected currentLang = 'es';

  constructor(private readonly translate: TranslateService) {
    this.currentLang = this.translate.currentLang || this.translate.getBrowserLang() || 'es';
  }

  protected changeLanguage(lang: string): void {
    this.currentLang = lang;
    this.translate.use(lang);
  }
}
