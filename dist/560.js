"use strict";(self.webpackChunkwebpack_project=self.webpackChunkwebpack_project||[]).push([[560],{6179(e,d,m){var t=m(420),l=m(9757);class a extends l.O{render(){return t.qy`
            <form 
                @formdata="${this.handleFormdata}" 
                @reset="${this.handleReset}" 
                @submit="${this.handleSubmit}"
            >
                <md-grid class="demo-grid">

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field inputmode="numeric" name="inputmode" type="text" label="Text"></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field inputmode="numeric" value="Text" name="inputmode2" type="text" label="Text"></md-text-field>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field name="text" type="text" label="Text"></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field value="Text" name="text2" type="text" label="Text"></md-text-field>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field name="number" type="number" label="Number"></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field value="12345" name="number2" type="number" label="Number"></md-text-field>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field name="tel" type="tel" label="Tel"></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field value="081935155404" name="tel2" type="tel" label="Tel"></md-text-field>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field autocomplete="email" name="email" type="email" label="Email"></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field autocomplete="email" value="ndiing.inc@gmail.com" name="email2" type="email" label="Email"></md-text-field>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field autocomplete="new-password" name="password" type="password" label="Password"></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field autocomplete="new-password" value="password" name="password2" type="password" label="Password"></md-text-field>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field name="search" type="search" label="Search"></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field value="Search" name="search2" type="search" label="Search"></md-text-field>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field name="url" type="url" label="Url"></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field value="https://www.google.com" name="url2" type="url" label="Url"></md-text-field>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field name="datetime-local" type="datetime-local" label="Datetime Local"></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field value="2026-08-04T23:00" name="datetime-local2" type="datetime-local" label="Datetime Local"></md-text-field>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field name="date" type="date" label="Date"></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field value="2026-08-04" name="date2" type="date" label="Date"></md-text-field>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field name="month" type="month" label="Month"></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field value="2026-08" name="month2" type="month" label="Month"></md-text-field>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field name="week" type="week" label="Week"></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field value="2026-W32" name="week2" type="week" label="Week"></md-text-field>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field name="time" type="time" label="Time"></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field value="23:00" name="time2" type="time" label="Time"></md-text-field>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-textarea name="textarea" label="Textarea"></md-textarea>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-textarea value="This is a long input in a multi-line text field that wraps overflow text onto a new line" name="textarea2" label="Textarea"></md-textarea>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-checkbox name="checkbox"></md-checkbox>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-checkbox checked name="checkbox2"></md-checkbox>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-radio-button name="radio-button"></md-radio-button>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-radio-button checked name="radio-button"></md-radio-button>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-switch name="switch"></md-switch>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-switch checked name="switch2"></md-switch>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider value="0" name="slider"></md-slider>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider value="50" name="slider2"></md-slider>
                    </md-grid-column>


                    <md-grid-column expanded="12">
                        <md-button color="tonal" type="reset" label="Reset"></md-button>
                        <md-button color="tonal" type="submit" label="Submit"></md-button>
                    </md-grid-column>
                </md-grid>
            </form>
        `}handleFormdata(e){console.log([...e.formData.entries()])}handleReset(e){}handleSubmit(e){e.preventDefault(),new FormData(e.currentTarget)}}customElements.define("demo-form",a);const i=document.createElement("demo-form");m.d(d,["default",0,i])}}]);