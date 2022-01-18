import React from 'react'

const TranscribeRealTime = () => {
    return (
        <div>
            <div class="container">
                <h1>
                    Real-time Audio Transcription
                </h1>
                <hr/>

                <div id="error" class="isa_error"></div>

                <div class="row">
                    <div class="col">
                        <label>Access ID:</label>
                        <input type="password" id="access_id" placeholder="ACCESS ID" value="AKIATLQ5LBNU73ZM4BVZ" readOnly/>

                        <label>Secret Key:</label>
                        <input type="password" id="secret_key" placeholder="SECRET KEY" value="/2krrtcVLDNpHXo2dfSr9Bfodjlon5CSJwWSWJen" readOnly/>
                        <label>Session Token (if using MFA):</label>
                        <input type="password" id="session_token" placeholder="SESSION TOKEN" value="" />
                    </div>
                    <div class="col">
                        <label>Language: </label>
                        <select id="language">
                            <optgroup label="English">
                                <option value="en-US">US English (en-US)</option>
                                <option value="en-AU">Australian English (en-AU)</option>
                                <option value="en-GB">British English (en-GB)</option>
                            </optgroup>
                            <optgroup label="French">
                                <option value="fr-CA">Canadian French (fr-CA)</option>
                                <option value="fr-FR">French (fr-FR)</option>
                            </optgroup>
                            <optgroup label="Spanish">
                                <option value="es-US">US Spanish (es-US)</option>
                            </optgroup>
                        </select>

                        <label>Region:</label>
                        <select id="region">
                            <option value="us-east-1">US East (N. Virginia)</option>
                            <option value="us-east-2">US East (Ohio)</option>
                            <option value="us-west-2">US West (Oregon)</option>
                            <option value="ap-southeast-2">Asia Pacific (Sydney)</option>
                            <option value="ca-central-1">Canada (Central)</option>
                            <option value="eu-west-1">EU (Ireland)</option>
                        </select>
                    </div>
                </div>
                <textarea id="transcript" placeholder="Press Start and speak into your mic" rows="5"
                    readOnly="readonly"></textarea>
                <div class="row">
                    <div class="col">
                        <button id="start-button" class="button-xl" title="Start Transcription">
                            <i class="fa fa-microphone"></i> Start
                        </button>
                        <button id="stop-button" class="button-xl" title="Stop Transcription" disabled={true}><i
                                class="fa fa-stop-circle"></i> Stop
                        </button>
                        <button id="reset-button" class="button-xl button-secondary" title="Clear Transcript"> 
                            Clear Transcript
                        </button>
                    </div>
                </div>
            </div>
     
        </div>
    )
}

export default TranscribeRealTime
