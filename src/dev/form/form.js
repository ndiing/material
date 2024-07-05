import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevFormComponent extends MDComponent {
    render() {
        return html`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Checkbox Input -->
                        <label for="subscribe">Subscribe:</label>
                        <input
                            type="checkbox"
                            id="subscribe"
                            name="subscribe"
                            value="newsletter"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Color Input -->
                        <label for="favcolor">Favorite Color:</label>
                        <input
                            type="color"
                            id="favcolor"
                            name="favcolor"
                            value="#ff0000"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Date Input -->
                        <label for="birthdate">Birthdate:</label>
                        <input
                            type="date"
                            id="birthdate"
                            name="birthdate"
                            value="2000-01-01"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Datetime-local Input -->
                        <label for="appointment">Appointment:</label>
                        <input
                            type="datetime-local"
                            id="appointment"
                            name="appointment"
                            value="2023-06-22T12:00"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Email Input -->
                        <label for="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value="example@example.com"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- File Input -->
                        <label for="resume">Upload Resume:</label>
                        <input
                            type="file"
                            id="resume"
                            name="resume"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Month Input -->
                        <label for="startmonth">Start Month:</label>
                        <input
                            type="month"
                            id="startmonth"
                            name="startmonth"
                            value="2023-06"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Number Input -->
                        <label for="quantity">Quantity:</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value="1"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Password Input -->
                        <label for="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value=""
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Radio Input -->
                        <label for="gender_male">Male:</label>
                        <input
                            type="radio"
                            id="gender_male"
                            name="gender"
                            value="male"
                        />
                        <label for="gender_female">Female:</label>
                        <input
                            type="radio"
                            id="gender_female"
                            name="gender"
                            value="female"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Range Input -->
                        <label for="volume">Volume:</label>
                        <input
                            type="range"
                            id="volume"
                            name="volume"
                            value="50"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Search Input -->
                        <label for="search">Search:</label>
                        <input
                            type="search"
                            id="search"
                            name="search"
                            value=""
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Tel Input -->
                        <label for="phone">Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value="123-456-7890"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Text Input -->
                        <label for="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value="user123"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Time Input -->
                        <label for="alarm">Alarm:</label>
                        <input
                            type="time"
                            id="alarm"
                            name="alarm"
                            value="07:00"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- URL Input -->
                        <label for="website">Website:</label>
                        <input
                            type="url"
                            id="website"
                            name="website"
                            value="https://example.com"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Week Input -->
                        <label for="week">Week:</label>
                        <input
                            type="week"
                            id="week"
                            name="week"
                            value="2023-W25"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Select with Options -->
                        <label for="cars">Choose a car:</label>
                        <select
                            id="cars"
                            name="cars"
                        >
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Select with Optgroup and Options -->
                        <label for="fruits">Choose a fruit:</label>
                        <select
                            id="fruits"
                            name="fruits"
                        >
                            <optgroup label="Citrus">
                                <option value="orange">Orange</option>
                                <option value="lemon">Lemon</option>
                                <option value="lime">Lime</option>
                            </optgroup>
                            <optgroup label="Berries">
                                <option value="strawberry">Strawberry</option>
                                <option value="blueberry">Blueberry</option>
                                <option value="raspberry">Raspberry</option>
                            </optgroup>
                        </select>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Textarea -->
                        <label for="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            cols="50"
                        >
Enter your message here...</textarea
                        >
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-button
                            label="Reset"
                            type="reset"
                            variant="outlined"
                        ></md-button>
                        <md-button
                            label="Submit"
                            type="submit"
                            variant="filled"
                        ></md-button>
                    </div>
                </div>
            </md-form>
        `;
    }

    handleFormNativeReset(event) {
        console.log(event);
    }

    handleFormNativeSubmit(event) {
        const body = JSON.stringify(event.detail.data);
        console.log(body);
    }
}

customElements.define("dev-form", DevFormComponent);

export default document.createElement("dev-form");
