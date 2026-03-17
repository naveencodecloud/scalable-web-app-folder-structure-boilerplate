// **Sample code for reference. Replace with your own implementation.**

import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { userApi } from '../features/user/userApi';

export const MyAccount = () => {
    const { user, login, token } = useAuth();

    const [name, setName] = useState(user?.name ?? '');
    const [email, setEmail] = useState(user?.email ?? '');
    const [avatarUrl, setAvatarUrl] = useState('');
    const [profileError, setProfileError] = useState('');
    const [profileSuccess, setProfileSuccess] = useState('');

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordSuccess, setPasswordSuccess] = useState('');

    const handleProfileSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setProfileError('');
        setProfileSuccess('');
        try {
            const updated = await userApi.updateProfile({ name, email, avatarUrl: avatarUrl || undefined });
            login(token!, { id: updated.id, email: updated.email, name: updated.name });
            setProfileSuccess('Profile updated.');
        } catch (err) {
            setProfileError(err instanceof Error ? err.message : 'Update failed.');
        }
    };

    const handlePasswordSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPasswordError('');
        setPasswordSuccess('');
        try {
            await userApi.updatePassword({ currentPassword, newPassword });
            setCurrentPassword('');
            setNewPassword('');
            setPasswordSuccess('Password updated.');
        } catch (err) {
            setPasswordError(err instanceof Error ? err.message : 'Update failed.');
        }
    };

    return (
        <div>
            <h1>My Account</h1>

            <section>
                <h2>Profile</h2>
                <form onSubmit={handleProfileSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="avatarUrl">Avatar URL</label>
                        <input
                            id="avatarUrl"
                            value={avatarUrl}
                            onChange={e => setAvatarUrl(e.target.value)}
                            placeholder="https://..."
                        />
                        {avatarUrl && <img src={avatarUrl} alt="Avatar preview" width={64} height={64} />}
                    </div>
                    {profileError && <p>{profileError}</p>}
                    {profileSuccess && <p>{profileSuccess}</p>}
                    <button type="submit">Save Profile</button>
                </form>
            </section>

            <section>
                <h2>Change Password</h2>
                <form onSubmit={handlePasswordSubmit}>
                    <div>
                        <label htmlFor="currentPassword">Current Password</label>
                        <input
                            id="currentPassword"
                            type="password"
                            value={currentPassword}
                            onChange={e => setCurrentPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="newPassword">New Password</label>
                        <input
                            id="newPassword"
                            type="password"
                            value={newPassword}
                            onChange={e => setNewPassword(e.target.value)}
                        />
                    </div>
                    {passwordError && <p>{passwordError}</p>}
                    {passwordSuccess && <p>{passwordSuccess}</p>}
                    <button type="submit">Update Password</button>
                </form>
            </section>
        </div>
    );
};
