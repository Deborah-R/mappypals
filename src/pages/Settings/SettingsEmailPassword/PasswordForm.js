import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';

class PasswordForm extends Component {
    state = {
        password: '',
        newPassword: '',
        confirmPassword: '',
        success: null,
        error: null
    };

    onSubmit = event => {
        event.preventDefault();
        const { newPassword, confirmPassword } = this.state;
        if (newPassword !== confirmPassword) {
            this.setState({
                error: 'Passwords must match'
            });
        }
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            password,
            newPassword,
            confirmPassword,
            error,
            success
        } = this.state;
        let errorMessage;
        let successMessage;
        if (error) {
            errorMessage = (
                <span className="form__msg form__msg--err" aria-live="polite">
                    {error}
                </span>
            );
        }
        if (success) {
            successMessage = (
                <span
                    className="form__msg form__msg--success"
                    aria-live="polite"
                >
                    {success}
                </span>
            );
        }
        return (
            <form onSubmit={this.onSubmit} className="form form--settings">
                <div className="form__section">
                    <label className="form__label form__label--settings">
                        Current Password
                        {errorMessage}
                        {successMessage}
                    </label>
                    <input
                        className="form__input form__input--settings"
                        type="password"
                        name="password"
                        onChange={this.onChange}
                        value={password}
                        required
                    />
                </div>
                <div className="form__section">
                    <label className="form__label form__label--settings">
                        New Password
                    </label>
                    <input
                        className="form__input form__input--settings"
                        type="password"
                        name="newPassword"
                        onChange={this.onChange}
                        value={newPassword}
                        required
                    />
                </div>
                <div className="form__section">
                    <label className="form__label form__label--settings">
                        Confirm New Password
                    </label>
                    <input
                        className="form__input form__input--settings"
                        type="password"
                        name="confirmPassword"
                        onChange={this.onChange}
                        value={confirmPassword}
                        required
                    />
                </div>
                <div>
                    <Button
                        btnType="SettingsEmailPassword"
                        id="changePasswordBtn"
                        type="submit"
                        disabled={newPassword.length < 1}
                        onClick={this.onClick}
                    >
                        Change Password
                    </Button>
                </div>
            </form>
        );
    }
}

export default PasswordForm;
