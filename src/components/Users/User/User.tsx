import React from "react";
import classes from './User.module.css';
import {UserType} from "../../../types/types";
import {Button} from "../../UI/Button/Button";
import userAvatar from '../../../assets/img/no-avatar.png';

type UserItemType = {
	users: Array<UserType>
	followUser: (userId: number) => void
	unfollowUser: (userId: number) => void
}

export const User: React.FC<UserItemType> = (
	{
		users,
		followUser,
		unfollowUser
	}) => {
	return (
		<div className={classes.UserWrapper}>
			{
				users.map(user => {
					return (
						<div key={user.id} className={classes.User}>
							<div className={classes.LeftBox}>
								<div
									className={classes.UserAvatar}
									// style={{
									// 	backgroundImage: `url(${user.photos.small
									// 		? user.photos.small
									// 		: userAvatar})`
									// }}
								/>
								{/*<img src={user.photoUrl} alt={user.name + ' ' + user.lastName}/>*/}

								<span>
									{
										user.followed
											? <Button
												styleButton={classes.UnFollow}
												onClick={() => unfollowUser(user.id)}
												title={'В друзьях'}/>
											: <Button
												styleButton={classes.Follow}
												onClick={() => followUser(user.id)}
												title={'Добавить'}/>
									}
								</span>
							</div>
							<div className={classes.RightBox}>
								<h2>{user.name}</h2>
								<p>{user.status}</p>
								<div className={classes.Location}>
									<b>Belarus:</b>
									<span>Minsk</span>
								</div>
							</div>
						</div>
					)
				})
			}
		</div>
	)
};