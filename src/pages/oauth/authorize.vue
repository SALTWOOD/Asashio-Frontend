<template>
    <v-row justify="center">
        <v-col cols="12" class="text-center mb-4">
            <h1 class="text-h4 font-weight-bold">授权请求</h1>
            <p class="text-body-1 text-medium-emphasis mt-2">第三方应用请求访问您的账户</p>
        </v-col>

        <v-col cols="12" md="10" lg="8">
            <v-card class="custom-oauth-card d-flex flex-column flex-md-row">
                <!-- 左侧应用信息区域 -->
                <v-card-text class="app-section pa-6 d-flex flex-column align-center justify-center" style="min-width: 40%;">
                    <v-avatar class="app-logo mb-6" size="100">
                        <span class="text-h3 font-weight-bold text-white">A</span>
                    </v-avatar>

                    <div class="text-center">
                        <h2 class="text-h5 font-weight-bold mb-4" v-text="app.name"></h2>
                        <p class="text-body-1 text-medium-emphasis mb-8" v-text="app.description"></p>
                    </div>
                </v-card-text>

                <!-- 右侧授权区域 -->
                <v-card-text class="pa-6">
                    <div class="d-flex align-center mb-6 pb-4" style="border-bottom: 1px solid #dadce0;">
                        <v-avatar size="60" color="primary">
                            <span class="text-h5 text-white">U</span>
                        </v-avatar>

                        <div class="ml-4">
                            <div class="text-h6 font-weight-bold" v-text="Public.user.username"></div>
                            <div class="d-flex align-center text-medium-emphasis">
                                <v-icon size="16" class="mr-2">mdi-email</v-icon>
                                <span v-text="Public.user.email"></span>
                            </div>
                        </div>
                    </div>

                    <div class="request-text pa-4 mb-6 rounded">
                        <p class="text-body-1">
                            <span class="font-weight-bold text-primary" v-text="app.name"></span>
                            想要访问您的账户。
                        </p>
                    </div>

                    <div class="d-flex align-center mb-4">
                        <v-icon color="primary" class="mr-2">mdi-shield-check</v-icon>
                        <h2 class="text-h6 font-weight-bold">此应用将获得以下权限</h2>
                    </div>

                    <v-list class="permissions-list mb-6">
                        <v-list-item class="px-0">
                            <template v-slot:prepend>
                                <v-icon color="success" class="mr-3">mdi-check-circle</v-icon>
                            </template>
                            <v-list-item-title class="permission-name">
                                <v-icon>mdi-account</v-icon>
                                <span>查看您的基本个人资料</span>
                            </v-list-item-title>
                            <v-list-item-subtitle class="text-medium-emphasis pl-8 mt-1">
                                包括您的姓名、电子邮件地址和个人资料照片
                            </v-list-item-subtitle>
                        </v-list-item>

                        <v-divider class="my-3"></v-divider>

                        <v-list-item class="px-0">
                            <template v-slot:prepend>
                                <v-icon color="success" class="mr-3">mdi-check-circle</v-icon>
                            </template>
                            <v-list-item-title class="permission-name">
                                <v-icon>mdi-account-group</v-icon>
                                <span>查看和管理您的联系人</span>
                            </v-list-item-title>
                            <v-list-item-subtitle class="text-medium-emphasis pl-8 mt-1">
                                读取、添加和编辑您的联系人列表
                            </v-list-item-subtitle>
                        </v-list-item>

                        <v-divider class="my-3"></v-divider>

                        <v-list-item class="px-0">
                            <template v-slot:prepend>
                                <v-icon color="success" class="mr-3">mdi-check-circle</v-icon>
                            </template>
                            <v-list-item-title class="permission-name">
                                <v-icon>mdi-calendar</v-icon>
                                <span>管理您的日历</span>
                            </v-list-item-title>
                            <v-list-item-subtitle class="text-medium-emphasis pl-8 mt-1">
                                查看、创建和修改您的日历活动
                            </v-list-item-subtitle>
                        </v-list-item>

                        <v-divider class="my-3"></v-divider>

                        <v-list-item class="px-0">
                            <template v-slot:prepend>
                                <v-icon color="success" class="mr-3">mdi-check-circle</v-icon>
                            </template>
                            <v-list-item-title class="permission-name">
                                <v-icon>mdi-format-list-checks</v-icon>
                                <span>查看您的任务</span>
                            </v-list-item-title>
                            <v-list-item-subtitle class="text-medium-emphasis pl-8 mt-1">
                                读取和管理您的待办事项和任务列表
                            </v-list-item-subtitle>
                        </v-list-item>
                    </v-list>

                    <div class="d-flex" style="gap: 16px;">
                        <v-btn variant="outlined" color="grey-darken-1" size="large" class="flex-grow-1">
                            <v-icon start>mdi-close</v-icon>
                            取消
                        </v-btn>

                        <v-btn color="primary" size="large" class="flex-grow-1">
                            <v-icon start>mdi-check</v-icon>
                            授权访问
                        </v-btn>
                    </div>

                </v-card-text>
            </v-card>

            <div class="text-center mt-8 pa-4">
                <p class="text-body-1 text-medium-emphasis">
                    授权后，您可以随时在账户设置中管理应用权限
                </p>
                <div class="d-flex justify-center flex-wrap gap-4 mt-4 footer-links">
                    <a href="#" class="text-primary">
                        <v-icon size="16" class="mr-1">mdi-file-document</v-icon>
                        服务条款
                    </a>
                    <a href="#" class="text-primary">
                        <v-icon size="16" class="mr-1">mdi-lock</v-icon>
                        隐私政策
                    </a>
                    <a href="#" class="text-primary">
                        <v-icon size="16" class="mr-1">mdi-help-circle</v-icon>
                        帮助中心
                    </a>
                    <a href="#" class="text-primary">
                        <v-icon size="16" class="mr-1">mdi-cog</v-icon>
                        账户设置
                    </a>
                </div>
            </div>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import type { AppInfo } from '@/types/AppInfo';
import { Public } from '@/types/Public';

const app = ref<AppInfo>({
    name: 'undefined',
    logo: 'undefined',
    description: 'undefined'
});

</script>

<style scoped>
.custom-oauth-card {
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.app-section {
    border-right: 1px solid #dadce0;
}

.app-logo {
    border-radius: 16px;
    background: linear-gradient(135deg, #4285f4, #3a7bd5);
    box-shadow: 0 5px 15px rgba(66, 133, 244, 0.3);
}

.request-text {
    background: rgba(66, 133, 244, 0.08);
    border-left: 4px solid #4285f4;
}

.permission-name i {
    color: #5f6368;
    margin-right: 10px;
}

.footer-links a {
    text-decoration: none;
    transition: all 0.2s;
}

.footer-links a:hover {
    text-decoration: underline;
}
</style>